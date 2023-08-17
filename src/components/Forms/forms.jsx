import Button from "../core-components/Button";
import Input from "../core-components/Input";
import Label from "../core-components/Label";

export default function Forms() {
    return (
        <form action="" className="">
            <fieldset className="w-full  flex flex-col gap-4 right">
                <Label>Name</Label>
                <Input type='text' placeholder='e.g. Stephen King' />
                <Label>E-mail Address</Label>
                <Input type='email' placeholder='e.g. stephenking@lorem.com' />
                <Label>Phone Number</Label>
                <Input type='tel' placeholder='e.g. +55 00 12345-6789' />
            </fieldset>
        </form>
    )
}