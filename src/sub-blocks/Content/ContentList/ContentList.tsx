import React from 'react';

import {v4 as uuidv4} from 'uuid';

import {YFMWrapper} from '../../../components';
import Image from '../../../components/Image/Image';
import {getMediaImage} from '../../../components/Media/Image/utils';
import {useTheme} from '../../../context/theme';
import {ContentItemProps, ContentSize} from '../../../models';
import {QAProps} from '../../../models/common';
import {block, getThemedValue} from '../../../utils';
import {getQaAttrubutes} from '../../../utils/blocks';

import './ContentList.scss';

const b = block('content-list');

function getHeadingLevel(size: ContentSize) {
    switch (size) {
        case 's':
            return 'h4';
        case 'l':
        default:
            return 'h3';
    }
}

interface ContentListProps {
    list: ContentItemProps[];
    size: ContentSize;
}

const ContentList = ({list, size, qa}: ContentListProps & QAProps) => {
    const theme = useTheme();
    const qaAttributes = getQaAttrubutes(qa, ['image', 'title', 'text']);

    return (
        <div className={b({size})} data-qa={qa}>
            {list?.map((item) => {
                const {icon, title, text} = item;
                const iconThemed = getThemedValue(icon, theme);
                const iconData = getMediaImage(iconThemed);

                return (
                    <div className={b('item')} key={uuidv4()}>
                        <Image {...iconData} className={b('icon')} qa={qaAttributes.image} />
                        <div>
                            {title &&
                                React.createElement(
                                    getHeadingLevel(size),
                                    {className: b('title'), 'data-qa': qaAttributes.title},
                                    title,
                                )}
                            {text && (
                                <YFMWrapper
                                    className={b('text')}
                                    content={text}
                                    modifiers={{constructor: true}}
                                    qa={qaAttributes.text}
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ContentList;
