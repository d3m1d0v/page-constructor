import React from 'react';

import {Button, Title, YFMWrapper} from '../../components';
import LinkBlock from '../../components/Link/Link';
import {Col} from '../../grid';
import {ClassNameProps, ContentBlockProps, ContentSize, TitleItemProps} from '../../models';
import {QAProps} from '../../models/common';
import {block} from '../../utils';
import {getQaAttrubutes} from '../../utils/blocks';

import ContentList from './ContentList/ContentList';

import './Content.scss';

const b = block('content');

function getTextSize(size: ContentSize) {
    switch (size) {
        case 's':
            return 's';
        case 'l':
        default:
            return 'm';
    }
}

function getLinkSize(size: ContentSize) {
    switch (size) {
        case 's':
            return 'm';
        case 'l':
        default:
            return 'l';
    }
}

function getButtonSize(size: ContentSize) {
    switch (size) {
        case 's':
            return 'm';
        case 'l':
        default:
            return 'xl';
    }
}

export type ContentProps = ContentBlockProps & ClassNameProps & QAProps;

const Content = (props: ContentProps) => {
    const {
        title,
        text,
        additionalInfo,
        size = 'l',
        links,
        buttons,
        colSizes = {all: 12, sm: 8},
        centered,
        theme,
        className,
        list,
        qa,
    } = props;
    const qaAttributes = getQaAttrubutes(qa, ['links', 'link', 'buttons', 'button', 'list']);

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: getTextSize(size)} as TitleItemProps)
            : title;

    const hasTitle = Boolean(title);

    return (
        <Col
            className={b({size, centered, theme}, className)}
            reset
            sizes={colSizes}
            qa={qaAttributes.container}
        >
            {title && <Title className={b('title')} title={titleProps} colSizes={{all: 12}} />}
            {text && (
                <div className={b('text', {['without-title']: !hasTitle})}>
                    <YFMWrapper
                        content={text}
                        modifiers={{constructor: true, [`constructor-size-${size}`]: true}}
                    />
                </div>
            )}
            {list?.length ? <ContentList list={list} size={size} qa={qaAttributes.list} /> : null}
            {additionalInfo && (
                <div className={b('notice')}>
                    <YFMWrapper
                        content={additionalInfo}
                        modifiers={{
                            constructor: true,
                            'constructor-notice': true,
                            [`constructor-size-${size}`]: true,
                        }}
                    />
                </div>
            )}
            {links && (
                <div className={b('links')} data-qa={qaAttributes.links}>
                    {links.map((link) => (
                        <LinkBlock
                            className={b('link')}
                            {...link}
                            textSize={getLinkSize(size)}
                            key={link.url}
                            qa={qaAttributes.link}
                        />
                    ))}
                </div>
            )}
            {buttons && (
                <div className={b('buttons')} data-qa={qaAttributes.buttons}>
                    {buttons.map((item) => (
                        <Button
                            className={b('button')}
                            {...item}
                            key={item.url}
                            size={getButtonSize(size)}
                            qa={qaAttributes.button}
                        />
                    ))}
                </div>
            )}
        </Col>
    );
};

export default Content;
