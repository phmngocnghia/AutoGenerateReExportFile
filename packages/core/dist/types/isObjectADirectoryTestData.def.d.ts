export interface IsObjectADirectoryTestInput {
    directory: string;
    obj: string;
}
export interface IsObjectADirectoryTestCase {
    input: IsObjectADirectoryTestInput;
    output: boolean;
    name: string;
}
