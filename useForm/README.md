# useForm Hook

Ejemplo de uso:
```
    const initialForm = {
        name: '',
        lastName: '',
        age: 0
    }

    const [formValues, handleInputChange, reset] = useFor(initialForm);
```