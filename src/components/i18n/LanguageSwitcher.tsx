'use client';

import { useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

const locales = ['es', 'en'] as const;

export default function LanguageSwitcher() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace('/', {locale: newLocale});
    });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 mr-2">{t('language')}:</span>
      <div className="flex bg-gray-100 rounded-lg p-1">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            disabled={isPending}
            className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
              locale === loc
                ? 'bg-brand-cream text-brand-primary shadow-sm'
                : 'text-brand-primary/60 hover:text-brand-primary hover:bg-brand-cream/50'
            } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loc.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
} 