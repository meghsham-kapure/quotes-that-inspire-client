export default function MaintenanceCard() {
  return (
    <div className="max-w-3xl w-full px-6">
      <div className="rounded-3xl bg-white p-12 shadow-sm border text-center">
        <p className="text-3xl font-bold text-red-500 mb-4">
          🚧 Under Maintenance
        </p>
        <p className="text-lg text-gray-600">
          We’ll be back shortly. Please try again later.
        </p>
      </div>
    </div>
  );
}
