import Card from '@/components/ui/Card'

export default function SimulatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary-600 mb-4 text-center">
        ⏰ מכונת הזמן
      </h1>
      <p className="text-xl text-gray-500 mb-10 text-center">
        בחרו מניה, בחרו תאריך, וגלו כמה הייתם מרוויחים!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 פרטי ההשקעה</h2>
          <p className="text-gray-500">טופס הסימולציה יתווסף בשלב הבא</p>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 גרף צמיחה</h2>
          <p className="text-gray-500">גרף הצמיחה יתווסף בשלב הבא</p>
        </Card>
      </div>
    </div>
  )
}
