import {Schema, SchemaFactory} from "@nestjs/mongoose";

interface Auto {
    id: string
    marka: string
    model: string
}

interface parts {
    mainAuto: Auto,
    auto: Auto[],
    year: string,
    volume: number,
    fuel: string,
    engineType: string,
    typeBody: string,
    gearBox: string,
    parts: string,
    numberParts: string,
    description: string,
    pratsState: string,
    modification: string,
    storage: string,
    shelf: string,
}

@Schema({
    timestamps: true
})
export class User {
    id: string
    partsList: Array<parts>
}

export const UserSchemas = SchemaFactory.createForClass(User)