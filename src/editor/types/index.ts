import {PageConstructorProps, PageConstructorProviderProps} from '../../containers/PageConstructor';
import {BlockDecorationProps, PageContent} from '../../models';
import {SchemaCustomConfig} from '../../schema';
import {EditBlockActions} from '../components/EditBlock/EditBlock';

export type EditorBlockId = number | string;

interface ContentTransformersOptions {
    viewMode: ViewModeItem;
}

export type ContentTransformer = (
    content: PageContent,
    options: ContentTransformersOptions,
) => PageContent;

export interface DeviceEmulationSettings {
    customStyles?: string;
    applyHostStyles?: boolean;
}

export interface EditorProps
    extends Required<Pick<PageConstructorProps, 'content'>>,
        Partial<Omit<PageConstructorProps, 'content'>> {
    providerProps?: PageConstructorProviderProps;
    onChange?: (data: PageContent) => void;
    transformContent?: ContentTransformer;
    customSchema?: SchemaCustomConfig;
    deviceEmulationSettings?: DeviceEmulationSettings;
}

export interface EditBlockEditorProps {
    isActive?: boolean;
    onSelect: () => void;
    actions: EditBlockActions;
}

export interface EditBlockProps extends EditBlockEditorProps, BlockDecorationProps {
    isHeader?: boolean;
}

export enum ViewModeItem {
    Edititng = 'editing',
    Desktop = 'desktop',
    Tablet = 'tablet',
    Mobile = 'mobile',
}
