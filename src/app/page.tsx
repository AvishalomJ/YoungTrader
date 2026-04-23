import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-primary-600 mb-4">
          🏆 גיבור הבורסה
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          מכונת הזמן של ההשקעות
        </p>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          גלו כמה הכסף שלכם היה יכול לצמוח אם הייתם משקיעים בעבר!
          <br />
          תבחרו מניה, תבחרו תאריך, ותראו את הקסם של ריבית דריבית 🚀
        </p>

        <Link href="/simulator">
          <Button variant="primary" size="lg">
            בוא נתחיל! 🎮
          </Button>
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto px-4">
        <Card>
          <div className="text-4xl mb-3">📈</div>
          <h3 className="text-xl font-bold text-primary-700 mb-2">נתונים אמיתיים</h3>
          <p className="text-gray-600">מחירי מניות היסטוריים אמיתיים מהבורסה</p>
        </Card>

        <Card>
          <div className="text-4xl mb-3">⏰</div>
          <h3 className="text-xl font-bold text-secondary-700 mb-2">מכונת זמן</h3>
          <p className="text-gray-600">חזרו בזמן וראו מה היה קורה להשקעה שלכם</p>
        </Card>

        <Card>
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-xl font-bold text-accent-700 mb-2">למדו להשקיע</h3>
          <p className="text-gray-600">הבינו את כוח הריבית דריבית בצורה כיפית</p>
        </Card>
      </section>
    </div>
  )
}
