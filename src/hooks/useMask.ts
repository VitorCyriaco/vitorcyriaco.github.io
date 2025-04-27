import { useEffect, useRef } from 'react';
import { withMask } from 'use-mask-input';

export function useMasks() {
    const tellRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (tellRef.current) {
            withMask("(99) 99999-9999")(tellRef.current);
        }
    }, []);

    return { tellRef };
}