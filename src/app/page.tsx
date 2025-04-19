import Image from "next/image"
import Link from "next/link"
import { ElectrostaticsSimulator } from "@/components/electrostatics-simulator"
import { WaterExperiment } from "@/components/water-experiment"

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Simulador Estadístico: Electrostática</h1>
          <p className="text-center mt-2 text-blue-100">Aprendizaje interactivo de física para estudiantes</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-700 text-white py-3 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-center space-x-8">
          <Link href="#presentacion" className="hover:text-blue-200 transition-colors">
            Presentación
          </Link>
          <Link href="#electrostatica" className="hover:text-blue-200 transition-colors">
            Electroestática
          </Link>
          <Link href="#simulador" className="hover:text-blue-200 transition-colors">
            Simulador
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:px-8">
        {/* Presentation Section */}
        <section id="presentacion" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">Bienvenido al Simulador Estadístico</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  Esta herramienta interactiva está diseñada para ayudar a los estudiantes a comprender los principios
                  de la electrostática a través de demostraciones visuales y experimentos prácticos.
                </p>
                <p className="text-gray-700 mb-4">
                  La electrostática es la rama de la física que trata con cargas eléctricas estacionarias o cargas que
                  se mueven lentamente. Comprender estos principios es fundamental para muchas áreas de la física y la
                  ingeniería.
                </p>
                <p className="text-gray-700">
                  ¡Explora las explicaciones y prueba el simulador interactivo para ver estos principios en acción!
                </p>
              </div>
              <div className="md:w-1/2">
             
              </div>
            </div>
          </div>
        </section>

        {/* Electrostate Section */}
        <section id="electrostatica" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">La Electroestática en la Física</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Carga Eléctrica</h3>
                <p className="text-gray-700 mb-4">
                  La carga eléctrica es una propiedad fundamental de la materia. La materia puede tener carga positiva,
                  negativa o neutra. Las cargas iguales se repelen entre sí, mientras que las cargas opuestas se atraen.
                </p>

                <h3 className="text-xl font-semibold text-blue-600 mb-3">Ley de Coulomb</h3>
                <p className="text-gray-700 mb-4">
                  La Ley de Coulomb establece que la fuerza entre dos partículas cargadas es directamente proporcional
                  al producto de sus cargas e inversamente proporcional al cuadrado de la distancia entre ellas.
                </p>

                <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mb-4">
                  <p className="text-center font-medium text-blue-800">F = k × (q₁ × q₂) / r²</p>
                  <p className="text-sm text-center text-blue-600 mt-2">
                    Donde F es la fuerza, k es la constante de Coulomb, q₁ y q₂ son las cargas, y r es la distancia
                    entre ellas.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Electricidad Estática</h3>
                <p className="text-gray-700 mb-4">
                  La electricidad estática ocurre cuando hay un desequilibrio de cargas eléctricas dentro o en la
                  superficie de un material. Esta carga permanece hasta que puede moverse por medio de una corriente
                  eléctrica o una descarga eléctrica.
                </p>

                <h3 className="text-xl font-semibold text-blue-600 mb-3">Efecto Triboeléctrico</h3>
                <p className="text-gray-700 mb-4">
                  El efecto triboeléctrico es un tipo de electrificación por contacto en el que ciertos materiales se
                  cargan eléctricamente después de entrar en contacto con otro material diferente y luego separarse.
                  Esto es lo que sucede cuando frotas un globo contra tu cabello.
                </p>

                <h3 className="text-xl font-semibold text-blue-600 mb-3">Inducción Electrostática</h3>
                <p className="text-gray-700">
                  La inducción electrostática es la redistribución de carga eléctrica en un objeto causada por la
                  influencia de cargas cercanas. Esto explica por qué un globo cargado puede atraer trozos de papel
                  neutros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simulator Section */}
        <section id="simulador" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">Simulador Interactivo</h2>
            <p className="text-gray-700 mb-6">
              Experimenta con fuerzas electrostáticas en estas simulaciones interactivas. Prueba dos experimentos
              clásicos que demuestran los principios de la electrostática.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Experimento del Globo y Papel</h3>
              <p className="text-gray-700 mb-4">
                Este experimento clásico demuestra cómo los objetos pueden cargarse mediante fricción y cómo los objetos
                cargados interactúan con objetos neutros.
              </p>

              <div className="flex justify-center">
                <ElectrostaticsSimulator />
              </div>

              <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
                <h4 className="text-lg font-medium text-blue-600 mb-2">Cómo Funciona</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Cuando frotas el globo contra el cabello, los electrones se transfieren del cabello al globo.</li>
                  <li>Esto le da al globo una carga negativa.</li>
                  <li>
                    Cuando el globo cargado se acerca a los trozos de papel neutros, induce una separación de carga en
                    ellos.
                  </li>
                  <li>El lado del papel más cercano al globo se carga positivamente.</li>
                  <li>Como las cargas opuestas se atraen, los trozos de papel son atraídos hacia el globo.</li>
                </ol>
              </div>

              {/* Mathematical Calculations for Balloon Experiment */}
              <div className="mt-6 bg-white p-4 rounded-md border border-blue-100">
                <h4 className="text-lg font-medium text-blue-600 mb-3">Cálculos Matemáticos: Fuerza Electrostática</h4>

                <p className="text-gray-700 mb-3">
                  La fuerza electrostática entre el globo cargado y un trozo de papel se puede calcular utilizando la
                  Ley de Coulomb:
                </p>

                <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mb-4">
                  <p className="text-center font-medium text-blue-800">F = k × (|q₁ × q₂|) / r²</p>
                </div>

                <p className="text-gray-700 mb-3">Donde:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>F = Fuerza electrostática (en Newtons, N)</li>
                  <li>k = Constante de Coulomb = 9 × 10⁹ N·m²/C²</li>
                  <li>q₁ = Carga del globo (en Coulombs, C)</li>
                  <li>q₂ = Carga inducida en el papel (en Coulombs, C)</li>
                  <li>r = Distancia entre las cargas (en metros, m)</li>
                </ul>

                <h5 className="text-md font-medium text-blue-600 mb-2">Ejemplo de cálculo:</h5>

                <p className="text-gray-700 mb-3">Supongamos los siguientes valores típicos para este experimento:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Carga del globo después de frotarlo: q₁ = -1 × 10⁻⁹ C</li>
                  <li>Carga inducida en el papel: q₂ = +5 × 10⁻¹⁰ C</li>
                  <li>Distancia entre el globo y el papel: r = 0.02 m (2 cm)</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mb-4">
                  <p className="text-gray-800 font-mono whitespace-pre-line">
                    F = 9 × 10⁹ × |-1 × 10⁻⁹ × 5 × 10⁻¹⁰| / (0.02)² F = 9 × 10⁹ × 5 × 10⁻¹⁹ / 4 × 10⁻⁴ F = 9 × 10⁹ ×
                    1.25 × 10⁻¹⁵ F = 1.125 × 10⁻⁵ N
                  </p>
                </div>

                <p className="text-gray-700">
                  Esta fuerza de aproximadamente 11.25 micronewtons es pequeña, pero suficiente para mover los ligeros
                  trozos de papel. La fuerza aumenta significativamente cuando la distancia disminuye (proporcional a
                  1/r²), lo que explica por qué los trozos de papel son atraídos con más fuerza a medida que se acercan
                  al globo.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Experimento de la Regla y el Agua</h3>
              <p className="text-gray-700 mb-4">
                Este experimento demuestra cómo un objeto cargado eléctricamente (la regla) puede atraer las moléculas
                polares del agua, haciendo que el chorro de agua se curve.
              </p>

              <div className="flex justify-center">
                <WaterExperiment />
              </div>

              <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
                <h4 className="text-lg font-medium text-blue-600 mb-2">Cómo Funciona</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Al frotar la regla con lana, se transfieren electrones, cargando la regla negativamente.</li>
                  <li>
                    El agua es una molécula polar, con un extremo ligeramente positivo y otro ligeramente negativo.
                  </li>
                  <li>
                    Cuando la regla cargada se acerca al chorro de agua, las moléculas de agua se orientan con su lado
                    positivo hacia la regla.
                  </li>
                  <li>Esta atracción hace que el chorro de agua se curve hacia la regla.</li>
                  <li>
                    Este fenómeno demuestra tanto la naturaleza polar del agua como la fuerza de atracción
                    electrostática.
                  </li>
                </ol>
              </div>

              {/* Mathematical Calculations for Water Experiment */}
              <div className="mt-6 bg-white p-4 rounded-md border border-blue-100">
                <h4 className="text-lg font-medium text-blue-600 mb-3">
                  Cálculos Matemáticos: Fuerza sobre Moléculas Polares
                </h4>

                <p className="text-gray-700 mb-3">
                  La fuerza ejercida por la regla cargada sobre las moléculas polares del agua se puede calcular
                  considerando la interacción entre la carga de la regla y el momento dipolar del agua:
                </p>

                <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mb-4">
                  <p className="text-center font-medium text-blue-800">F = |q × p × cosθ| / (4πε₀ × r³)</p>
                </div>

                <p className="text-gray-700 mb-3">Donde:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>F = Fuerza sobre la molécula de agua (en Newtons, N)</li>
                  <li>q = Carga de la regla (en Coulombs, C)</li>
                  <li>p = Momento dipolar del agua = 6.2 × 10⁻³⁰ C·m</li>
                  <li>θ = Ángulo entre el dipolo y el campo eléctrico</li>
                  <li>ε₀ = Permitividad del vacío = 8.85 × 10⁻¹² F/m</li>
                  <li>r = Distancia entre la regla y la molécula de agua (en metros, m)</li>
                </ul>

                <h5 className="text-md font-medium text-blue-600 mb-2">Ejemplo de cálculo:</h5>

                <p className="text-gray-700 mb-3">Supongamos los siguientes valores para este experimento:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Carga de la regla después de frotarla: q = -2 × 10⁻⁸ C</li>
                  <li>Distancia entre la regla y el chorro de agua: r = 0.05 m (5 cm)</li>
                  <li>Ángulo θ = 0° (asumiendo alineación óptima del dipolo)</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mb-4">
                  <p className="text-gray-800 font-mono whitespace-pre-line">
                    F = |-2 × 10⁻⁸ × 6.2 × 10⁻³⁰ × cos(0°)| / (4π × 8.85 × 10⁻¹² × (0.05)³) F = |
                    {"-2 × 10⁻⁸ × 6.2 × 10⁻³⁰ × 1"} | / (4π × 8.85 × 10⁻¹² × 1.25 × 10⁻⁴) F = 1.24 × 10⁻³⁷ / 1.39 ×
                    10⁻¹⁴ F = 8.92 × 10⁻²⁴ N
                  </p>
                </div>

                <p className="text-gray-700 mb-4">
                  Esta fuerza parece extremadamente pequeña, pero debemos considerar que:
                </p>

                <ol className="list-decimal list-inside space-y-1 text-gray-700 mb-4">
                  <li>Actúa sobre cada molécula de agua individualmente</li>
                  <li>
                    Un pequeño volumen de agua contiene un número enorme de moléculas (aproximadamente 3.3 × 10²²
                    moléculas por mililitro)
                  </li>
                  <li>El efecto acumulativo es significativo</li>
                </ol>

                <p className="text-gray-700 mb-3">
                  Para calcular la fuerza total sobre un volumen de agua, multiplicamos por el número de moléculas:
                </p>

                <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mb-4">
                  <p className="text-gray-800 font-mono whitespace-pre-line">
                    F_total = F_molécula × Número de moléculas F_total = 8.92 × 10⁻²⁴ N × (3.3 × 10²² moléculas/ml × 0.1
                    ml) F_total = 8.92 × 10⁻²⁴ N × 3.3 × 10²¹ moléculas F_total = 2.94 × 10⁻² N
                  </p>
                </div>

                <p className="text-gray-700">
                  Esta fuerza total de aproximadamente 0.03 N es suficiente para desviar visiblemente un chorro de agua
                  delgado. Además, la fuerza aumenta drásticamente a medida que la distancia disminuye (proporcional a
                  1/r³), lo que explica por qué la curvatura del chorro de agua es más pronunciada cuando la regla está
                  más cerca.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Simulador Estadístico | Herramienta Educativa de Física</p>
          <p className="text-blue-200 text-sm mt-2">Diseñado para el aprendizaje y la exploración de los estudiantes</p>
        </div>
      </footer>
    </main>
  )
}
