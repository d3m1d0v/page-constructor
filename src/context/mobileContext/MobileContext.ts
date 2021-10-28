import React from 'react';
import {Platform} from './constants';

export interface History {
    action: 'PUSH' | 'POP' | 'REPLACE' | '';
    replace(location: Partial<Location>): void;
    push(location: Partial<Location>): void;
    goBack(): void;
    navigationHistory: string[];
}
export interface Location {
    pathname: string;
    search: string;
    hash: string;
    hostname?: string;
    tld?: string;
}

export interface MobileContextProps {
    mobile: boolean;
    platform: Platform;
    useHistory: () => History;
    useLocation: () => Location;
    setMobile: (mobile: boolean, platform?: Platform) => void;
    setPlatform: (platform: Platform) => void;
}

const initialValue: MobileContextProps = {
    mobile: false,
    platform: Platform.BROWSER,
    useHistory: () => ({action: '', replace() {}, push() {}, goBack() {}, navigationHistory: []}),
    useLocation: () => ({pathname: '', search: '', hash: ''}),
    setMobile: () => {},
    setPlatform: () => {},
};

export const MobileContext = React.createContext(initialValue);
