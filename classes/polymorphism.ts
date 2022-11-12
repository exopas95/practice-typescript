interface SStorage<T> {
    [key: string]: T
}

// class가 interface로 generic을 보내고, interface는 그 generic을 사용한다.
class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key: string, value: T) {
        this.storage[key] = value
    }
    remove(key: string) {
        delete this.storage.key
    }
    get(key: string): T {
        return this.storage[key]
    }

    clear() {
        this.storage = {}
    }
}

const stringStorage = new LocalStorage<String>()
stringStorage.get("key")
stringStorage.set("hello", "")

const booleanStorage = new LocalStorage<Boolean>()
booleanStorage.get("key")
booleanStorage.set("hello", true)
