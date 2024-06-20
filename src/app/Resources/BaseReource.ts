export class BaseResource {
    static collection(data: any[]): any[] {
        return data.map((item) => this.transform(item));
    }

    static transform(item: any): any {
        return item;
    }
}