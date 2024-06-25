/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { ScrollArea } from "@/components/ui/scroll-area"

const InboxPage = () => {

    return (
        <div>
            <div className=' flex items-center justify-center inset-x-0 top-0 border-t  border-grey h-20 shadow-md'>
            <h1 className='text-center text-xl font-bold'>Messages</h1>
            </div>
            <ScrollArea className="h-[670px] w-[100%] p-1">
                Jokester began sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup, even in the
                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                then, one day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And once they
                started laughing, they couldn't stop
                Jokester began sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup, even in the
                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                then, one day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And once they
                started laughing, they couldn't stop
                Jokester began sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup, even in the
                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                then, one day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And once they
                started laughing, they couldn't stop
                Jokester began sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup, even in the
                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                then, one day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And once they
                started laughing, they couldn't stop
                Jokester began sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup, even in the
                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                then, one day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And once they
                started laughing, they couldn't stop
                {/*Here map all conversations for user, create a conversation box view for each one, 
                    they should be clickable and navigate to chat view for each (drawer component coming in form the right side)*/}
            </ScrollArea>
            <NavBar />
        </div>
    );
}

export default InboxPage;