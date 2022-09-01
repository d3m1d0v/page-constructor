import React from 'react';

import {block} from '../../utils';
import {QuestionsProps} from '../../models';
import Link from '../../components/Link/Link';

import {YFMWrapper, ToggleArrow, Foldable, HTML} from '../../components';
import {Row, Col} from '../../grid';
import {Content} from '../../sub-blocks';

import './Questions.scss';

const b = block('QuestionsBlock');

interface QuestionsState {
    opened: number[];
}

export default class QuestionsBlock extends React.Component<QuestionsProps, QuestionsState> {
    state: QuestionsState = {
        opened: [0],
    };

    render() {
        const {title, text, additionalInfo, links, buttons, items} = this.props;
        const {opened} = this.state;

        return (
            <div className={b()}>
                <Row>
                    <Col sizes={{all: 12, md: 4}}>
                        <div className={b('title')}>
                            <Content
                                title={title}
                                text={text}
                                additionalInfo={additionalInfo}
                                links={links}
                                buttons={buttons}
                                colSizes={{all: 12, md: 12}}
                            />
                        </div>
                    </Col>
                    <Col sizes={{all: 12, md: 8}}>
                        {items.map(
                            (
                                {title: itemTitle, text: itemText, link, listStyle = 'dash'},
                                index,
                            ) => {
                                const isOpened = opened.includes(index);

                                return (
                                    <div key={itemTitle} className={b('item')}>
                                        <h4
                                            className={b('item-title')}
                                            onClick={() => this.toggleItem(index)}
                                        >
                                            <HTML>{itemTitle}</HTML>
                                            <ToggleArrow
                                                open={isOpened}
                                                size={16}
                                                type={'vertical'}
                                                iconType="navigation"
                                                className={b('arrow')}
                                            />
                                        </h4>
                                        <Foldable isOpened={isOpened}>
                                            <div className={b('text')}>
                                                <YFMWrapper
                                                    content={itemText}
                                                    modifiers={{
                                                        constructor: true,
                                                        constructorListStyle: true,
                                                        constructorListStyleDash:
                                                            listStyle === 'dash',
                                                    }}
                                                />
                                                {link && <Link {...link} className={b('link')} />}
                                            </div>
                                        </Foldable>
                                    </div>
                                );
                            },
                        )}
                    </Col>
                </Row>
            </div>
        );
    }

    private toggleItem = (index: number) => {
        const {opened} = this.state;
        let newState;

        if (opened.includes(index)) {
            newState = opened.filter((intemIndex) => intemIndex !== index);
        } else {
            newState = [...opened, index];
        }

        this.setState({opened: newState});
    };
}
