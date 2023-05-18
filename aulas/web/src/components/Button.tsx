const styles = {
    color: '#f00',
}

// interface dita quais são os TIPOS dos
// PARÂMETROS passados para uma função
interface ButtonProps {
    title: string
}

export function Button({ title }: ButtonProps) {
    return <p style={styles}>{title}</p>
}
