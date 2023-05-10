import styles from '@/app/styles/components/Card.module.scss'

type Props = {
    url: string,
    title: string,
    description: string,
}

const Card: React.FC<Props> = ({ url, title, description }) => {
    return (
        <a
            href={url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2>
                {title} <span>-&gt;</span>
            </h2>
            <p>{description}</p>
        </a>
    )
}

export default Card