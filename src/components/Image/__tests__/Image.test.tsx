import React from 'react';

import {render, screen} from '@testing-library/react';

import {
    testCustomClassName,
    testCustomStyle,
    testOnClick,
} from '../../../../test-utils/shared/common';
import {testSourceProps} from '../../../../test-utils/shared/image';
import Image, {ImageProps} from '../Image';
import i18n from '../i18n';

const qaId = 'image-component';

const imageSrc =
    'https://storage.yandexcloud.net/cloud-www-assets/constructor/storybook/images/img-gray.png';

describe('Image', () => {
    test('Render Image by default', async () => {
        render(<Image src={imageSrc} qa={qaId} />);

        const component = screen.getByTestId(qaId);
        expect(component).toBeInTheDocument();
        expect(component).toBeVisible();
    });

    test('add image as src prop', () => {
        testSourceProps<ImageProps>({
            component: Image,
            props: {src: imageSrc, qa: qaId},
        });
    });

    test('add image as desktop prop', () => {
        testSourceProps<ImageProps>({
            component: Image,
            props: {desktop: imageSrc, qa: qaId},
        });
    });

    test('add image as tablet prop', () => {
        testSourceProps<ImageProps>({
            component: Image,
            props: {desktop: imageSrc, tablet: imageSrc, qa: qaId},
        });
    });

    test('add image as mobile prop', () => {
        testSourceProps<ImageProps>({
            component: Image,
            props: {desktop: imageSrc, mobile: imageSrc, qa: qaId},
        });
    });

    test('add image as src prop with disabledCompress', () => {
        testSourceProps<ImageProps>({
            component: Image,
            props: {src: imageSrc, qa: qaId, disableCompress: true},
        });
    });

    test('add image as desktop prop with disabledCompress', () => {
        testSourceProps<ImageProps>({
            component: Image,
            props: {desktop: imageSrc, qa: qaId, disableCompress: true},
        });
    });

    test('add image as tablet prop with disabledCompress', () => {
        testSourceProps<ImageProps>({
            component: Image,
            props: {desktop: imageSrc, tablet: imageSrc, qa: qaId, disableCompress: true},
        });
    });

    test('add image as mobile prop with disabledCompress', () => {
        testSourceProps<ImageProps>({
            component: Image,
            props: {desktop: imageSrc, mobile: imageSrc, qa: qaId, disableCompress: true},
        });
    });

    test('add className', () => {
        testCustomClassName<ImageProps>({
            component: Image,
            props: {src: imageSrc, qa: qaId},
            options: {customClassNameProp: 'containerClassName'},
        });
    });

    test('add className to image', () => {
        const className = 'custom-class-name';

        render(<Image className={className} src={imageSrc} qa={qaId} />);

        const component = screen.getByRole('img');
        expect(component).toHaveClass(className);
    });

    test('add style', () => {
        testCustomStyle<ImageProps>({
            component: Image,
            props: {src: imageSrc, qa: qaId},
            options: {role: 'img'},
        });
    });

    test('render default "alt"', () => {
        render(<Image src={imageSrc} qa={qaId} />);

        const component = screen.getByRole('img');
        expect(component).toHaveAttribute('alt', i18n('img-alt'));
    });

    test('render custom "alt"', () => {
        const alt = 'defined-alt';
        render(<Image src={imageSrc} alt={alt} qa={qaId} />);

        const component = screen.getByRole('img');
        expect(component).toHaveAttribute('alt', alt);
    });

    test('call onClick', async () => {
        testOnClick<ImageProps>({
            component: Image,
            props: {src: imageSrc, qa: qaId},
            options: {role: 'img'},
        });
    });
});
