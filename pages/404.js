import { FaExclamationTriangle } from 'react-icons/fa'
import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from '@/styles/NotFound.module.css'

export default function NotFoundPage() {
    return (
        <Layout title="Page not found.">
            <div className={styles.error}>
                <h1><FaExclamationTriangle /> 404 </h1>
                <h4>Sorry, page not found.</h4>
                <Link href="/">Go back home.</Link>
            </div>
        </Layout>
    )
}
