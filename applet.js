class AppletGallery {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.appletgallery = [];
        this.init();
    }
    async init() {
        await this.fetchData();
        this.renderAppletGallery(this.appletgallery);
        this.bindSearchEvent();
    }
}