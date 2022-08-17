import React from 'react';
import {a11yHiddenSvgProps} from '../utils/svg';

export function Github(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="currentColor"
            {...a11yHiddenSvgProps}
            {...props}
        >
            <path d="M25.524 10.479a10.952 10.952 0 0 0-4.003-4.004C19.836 5.492 17.996 5 16 5s-3.836.492-5.521 1.475a10.95 10.95 0 0 0-4.004 4.004C5.492 12.164 5 14.004 5 15.998c0 2.397.7 4.553 2.098 6.467 1.4 1.915 3.206 3.24 5.421 3.975.258.048.45.014.573-.1a.56.56 0 0 0 .186-.43l-.007-.773a128.35 128.35 0 0 1-.007-1.275l-.33.057c-.21.039-.474.055-.794.05a6.048 6.048 0 0 1-.996-.1 2.224 2.224 0 0 1-.96-.43 1.817 1.817 0 0 1-.63-.88l-.143-.33a3.58 3.58 0 0 0-.45-.73c-.206-.267-.414-.449-.624-.544l-.1-.072a1.05 1.05 0 0 1-.186-.172.785.785 0 0 1-.13-.2c-.028-.067-.004-.122.072-.166.077-.043.215-.064.416-.064l.286.043c.191.039.427.153.71.344.28.19.512.44.694.744.22.392.484.69.795.896.31.205.623.308.938.308.315 0 .587-.024.816-.072.23-.048.444-.12.645-.215.086-.64.32-1.131.701-1.475a9.8 9.8 0 0 1-1.468-.258 5.846 5.846 0 0 1-1.346-.559 3.855 3.855 0 0 1-1.153-.96c-.306-.381-.556-.883-.752-1.503-.196-.62-.293-1.337-.293-2.148 0-1.156.377-2.14 1.131-2.951-.353-.869-.32-1.843.1-2.922.277-.086.688-.021 1.232.193.544.215.943.4 1.196.552.253.153.456.282.609.387a10.17 10.17 0 0 1 2.75-.373c.945 0 1.862.124 2.75.373l.544-.344c.372-.23.812-.44 1.318-.63.506-.191.893-.244 1.16-.158.43 1.08.468 2.053.115 2.922.754.812 1.131 1.795 1.131 2.95 0 .812-.098 1.53-.293 2.156-.196.626-.449 1.127-.76 1.504-.31.377-.696.695-1.16.952a5.855 5.855 0 0 1-1.346.559 9.84 9.84 0 0 1-1.468.258c.496.43.745 1.108.745 2.034v3.022c0 .171.06.315.179.43.12.114.308.147.566.1 2.215-.736 4.022-2.06 5.42-3.975 1.4-1.915 2.099-4.07 2.099-6.467 0-1.995-.492-3.835-1.476-5.52z" />
        </svg>
    );
}
