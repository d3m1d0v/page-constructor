import {BaseProps, BlockBaseProps, JustifyProps} from '../../schema/validators/common';

export const TableBlock = {
    'table-block': {
        additionalProperties: false,
        required: ['title', 'table'],
        properties: {
            ...BlockBaseProps,
            title: {
                type: 'string',
                contentType: 'text',
            },
            table: {
                additionalProperties: false,
                required: ['content'],
                properties: {
                    ...BaseProps,
                    content: {
                        type: 'array',
                        items: {
                            type: 'array',
                            items: {
                                oneOf: [
                                    {
                                        type: 'string',
                                        contentType: 'text',
                                        optionName: 'text',
                                    },
                                    {
                                        type: 'number',
                                        contentType: 'text',
                                        optionName: 'number',
                                    },
                                ],
                            },
                        },
                    },
                    legend: {
                        type: 'array',
                        items: {
                            type: 'string',
                            contentType: 'yfm',
                        },
                    },
                    justify: {
                        type: 'array',
                        items: JustifyProps,
                    },
                    marker: {
                        type: 'string',
                        enum: ['disk'],
                    },
                },
            },
        },
    },
};
