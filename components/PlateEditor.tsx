'use client';

import { usePlateEditor, Plate, PlateContent } from '@udecode/plate/react';
import { BoldPlugin, ItalicPlugin, UnderlinePlugin } from '@udecode/plate-basic-marks/react';
import { HeadingPlugin } from '@udecode/plate-heading/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';

export default function PlateEditor() {
    const editor = usePlateEditor({
        plugins: [HeadingPlugin, BlockquotePlugin, BoldPlugin, ItalicPlugin, UnderlinePlugin],
    });

    return (
        <Plate editor={editor}>
            <PlateContent placeholder="Type..." />
        </Plate>
    );
}
