import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations('home')
  return (
    <div>
        NEXT
        <p>{t('header')}</p>
        <p>{t('add')}</p>
    </div>
  );
}
