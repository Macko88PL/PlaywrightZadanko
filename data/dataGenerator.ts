import { Page, expect } from '@playwright/test';

export class DataGenerator{
    private static randomElement(array: string[]): string {
        return array[Math.floor(Math.random() * array.length)];
    }

    private static randomString(length: number): string {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    public static generateFirstName(): string {
        const firstNames = ['Ala', 'Maciek', 'Bartek', 'Zofia', 'Lena'];
        return this.randomElement(firstNames);
    }

    public static generateLastName(): string {
        const lastNames = ['Kowalski', 'CypsAlboZyps', 'Solo', 'Aragorn'];
        return this.randomElement(lastNames);
    }

    public static generateEmail(): string {
        const localPart = this.randomString(10);
        return `${localPart}@test.pl`;
    }

}