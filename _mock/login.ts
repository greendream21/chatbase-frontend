type InputFields = {
    name: string,
    label: string,
    type: string,
    placeholder: string,
}[];

const inputFields: InputFields = [
    {
        name: 'email',
        label: 'Name',
        type: 'email',
        placeholder: 'Your email',
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter password',
    },
];

export default inputFields;