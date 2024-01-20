import {auth } from '@clerk/nextjs';
import prismadb from './prismadb';
import { MAX_FREE_API_LIMIT } from '@/constants';

export const increaseFreeAPILimit = async () => {

    const {userId} = auth();

    if(!userId) return;
    
    const currUser = await prismadb.userApiLimit.findUnique({
        where:{
            userId
        }
    });

    if(currUser) {
        await prismadb.userApiLimit.update({
            where:{
                userId:userId,
            },
            data:{count:currUser.count+1}
        })
    }
    else{
        await prismadb.userApiLimit.create({
            data:{
                userId:userId,
                count:1,
            }
        });
    }
}

export const checkApiLimit = async () => {

    const {userId} = auth();

    if(!userId){
        return;
    }

    const currUser = await prismadb.userApiLimit.findUnique({
        where:{
            userId
        }
    });

    if(currUser && currUser.count >= MAX_FREE_API_LIMIT){
        return false;
    }
    else{
        return true;
    }
}

export const getApiLimitCount = async () => {

    const {userId} = auth();

    if(!userId){
        return;
    }

    const currUser = await prismadb.userApiLimit.findUnique({
        where:{
            userId
        }
    });

    if(!currUser)return 0;

    return currUser.count;
}