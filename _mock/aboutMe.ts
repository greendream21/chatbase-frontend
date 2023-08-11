type InputFields = {
    divClassName: string,
    id: string,
    label: string,
    type?: string,
    placeholder: string,
    value: string,
    className: string,
    element?: string,
}[];

const inputFields: InputFields = [
    {
        divClassName: "col-lg-6 left",
        id: "name",
        label: "Name",
        type: "text",
        placeholder: "Your name",
        value: "",
        className: "p-2 rounded-3"
    },
    {
        divClassName: "col-lg-6 right",
        id: "location",
        label: "Location",
        type: "text",
        placeholder: "Enter your location",
        value: "",
        className: "p-2 rounded-3"
    },
    {
        divClassName: "col-lg-12",
        id: "website",
        label: "Company Website",
        type: "text",
        placeholder: "Your company website",
        value: "",
        className: "p-2 rounded-3"
    },
    {
        divClassName: "col-lg-12",
        id: "offer",
        label: "Enter your offer in the text box",
        placeholder: "Type your offer here",
        value: "",
        element: "textarea",
        className: "p-2 rounded-3"
    },
];

export default inputFields;