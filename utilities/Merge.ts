export default function merge<T>(object1: T, object2: T | Partial<T>) {
    return { ...object1, ...object2 };
}
