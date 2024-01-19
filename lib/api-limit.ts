import {auth } from '@clerk/nextjs';
import prismadb from './prismadb';
import { MAX_FREE_API_LIMIT } from '@/constants';

export const increaseFreeAPILimit = async () => {

    const {userId} = auth();

    if(!userId) return;
    
}