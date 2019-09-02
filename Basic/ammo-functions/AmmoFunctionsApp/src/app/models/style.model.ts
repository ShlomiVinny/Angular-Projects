import { SpanStyle } from './span-style.model';
import { ContainerStyle } from './container-style.model';

export class Style {

     public element: string;
     public type: string;
     public caliber: string;
     public src: string;
     public position: string;
     public top: number;
     public left: number;
     public span?: SpanStyle;
     public container?: ContainerStyle;

}

