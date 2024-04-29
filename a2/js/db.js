export function f(item){
    let db;
    let store;
    let transaction;
    let request = window.indexedDB.open('config');
    
    request.onupgradeneeded = function() {
      db = request.result;
      if (!db.objectStoreNames.contains('person')) {
        store = db.createObjectStore('person', {autoIncrement: true});
        store.createIndex('name','name',{unique : false});
        store.createIndex('url','url',{unique:false});
      }
    }
    
    request.onsuccess = function() {
      db = request.result;
      transaction = db.transaction(["person"],"readwrite");
      store = transaction.objectStore("person");
      store.add(item);
    }
}

