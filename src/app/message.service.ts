import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    public messages: {
        general: any[];
        random: any[];
        clientChat: any[];
        internalProjects: any[];
        marketing: any[];
    } = {
        general: [
            {
                userName: "Namey Fakerton",
                avatarURL: "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/mjb-6951_2_orig.jpg",
                date: new Date().toUTCString(),
                messageText: 'Does anyone know why the serve is returning a 403? I have valid credentials'
            }
        ],
        random: [],
        clientChat: [],
        internalProjects: [],
        marketing: []
    };
}
