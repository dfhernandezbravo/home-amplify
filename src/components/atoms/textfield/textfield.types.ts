import { ChangeEvent } from "react";

export type TextfieldProps = {
    type: string;
    placeholder: string;
    value: any;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    name: string;
}