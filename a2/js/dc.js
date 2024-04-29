export function f(json){
    const jsonStr = (json instanceof Object) ? JSON.stringify(json) : json;
    const url = window.URL || window.webkitURL || window;
    const blob = new Blob([jsonStr]);
    const saveLink = document.createElement('a');
    saveLink.href = url.createObjectURL(blob);
    saveLink.download = new Date().getTime() + '.json';
    saveLink.click();
}