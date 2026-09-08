// src/app/termos-de-uso/page.js
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermosDeUso() {
  return (
    <div className="bg-[#f8f7f3] min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            Termos de Uso
          </h1>
          <div className="w-24 h-1 bg-[#E07B39] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            Instituto Templo da Alegria (ITA) - Projeto Purim
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Última atualização: 07 de setembro de 2026
          </p>
        </div>

        {/* Conteúdo */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8">
          
          {/* Seção 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              1. Introdução e Aceitação
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Bem-vindo ao site do <strong className="text-[#E07B39]">Instituto Templo da Alegria (ITA)</strong>. 
              Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. 
              Se você não concordar com qualquer parte destes termos, por favor, não utilize nosso site.
            </p>
          </section>

          {/* Seção 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              2. Finalidade do Site
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Este site tem como objetivo divulgar as atividades, projetos e ações sociais do 
              <strong className="text-[#E07B39]"> Instituto Templo da Alegria (ITA)</strong>, incluindo o 
              <strong className="text-[#E07B39]"> Projeto Purim</strong>, a creche, a escola e as frentes missionárias.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Todo o conteúdo disponibilizado tem caráter informativo, educativo e espiritual, 
              estando alinhado com a missão do ITA de transformar vidas através da fé e da solidariedade.
            </p>
          </section>

          {/* Seção 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              3. Uso Adequado
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Ao utilizar nosso site, você concorda em:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Utilizar o site apenas para fins legais e de acordo com estes Termos de Uso;</li>
              <li>Não publicar ou transmitir conteúdo ofensivo, difamatório, obsceno ou ilegal;</li>
              <li>Não tentar acessar áreas restritas do site sem autorização;</li>
              <li>Não utilizar o site para enviar spam ou mensagens não solicitadas;</li>
              <li>Não reproduzir, distribuir ou modificar o conteúdo do site sem autorização prévia.</li>
            </ul>
          </section>

          {/* Seção 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              4. Propriedade Intelectual
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Todo o conteúdo disponível neste site, incluindo textos, imagens, logotipos, vídeos, 
              design e código-fonte, é de propriedade do 
              <strong className="text-[#E07B39]"> Instituto Templo da Alegria (ITA)</strong> ou de seus 
              parceiros e colaboradores, sendo protegido por leis de direitos autorais e propriedade intelectual.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              É proibida a reprodução, distribuição, modificação ou uso comercial de qualquer conteúdo 
              sem a autorização expressa e por escrito do ITA.
            </p>
          </section>

          {/* Seção 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              5. Doações e Contribuições
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As doações realizadas através do site são voluntárias e destinadas exclusivamente ao 
              financiamento dos projetos sociais do <strong className="text-[#E07B39]">Instituto Templo da Alegria (ITA)</strong>.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
              <li>Todas as doações são processadas por plataformas de pagamento seguras;</li>
              <li>As doações são <strong>não reembolsáveis</strong>, salvo em caso de erro comprovado no processamento;</li>
              <li>O ITA se compromete a utilizar os recursos recebidos de forma transparente e em conformidade com sua missão social.</li>
            </ul>
          </section>

          {/* Seção 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              6. Links para Sites de Terceiros
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Este site pode conter links para sites de terceiros. O 
              <strong className="text-[#E07B39]"> Instituto Templo da Alegria (ITA)</strong> não se responsabiliza 
              pelo conteúdo, políticas de privacidade ou práticas de qualquer site de terceiros.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              A inclusão de qualquer link não implica em endosso ou recomendação do conteúdo desses sites.
            </p>
          </section>

          {/* Seção 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              7. Isenção de Responsabilidade
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O conteúdo disponibilizado neste site tem caráter <strong>informativo e educativo</strong>. 
              O <strong className="text-[#E07B39]">Instituto Templo da Alegria (ITA)</strong> não se responsabiliza por:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
              <li>Decisões tomadas com base nas informações disponibilizadas;</li>
              <li>Erros ou omissões no conteúdo;</li>
              <li>Danos ou prejuízos decorrentes do uso do site;</li>
              <li>Interrupções no funcionamento do site por motivos técnicos ou de manutenção.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              As informações contidas no site <strong>não substituem</strong> aconselhamento profissional 
              (jurídico, médico, psicológico, etc.).
            </p>
          </section>

          {/* Seção 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              8. Privacidade e Dados Pessoais
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O tratamento de dados pessoais coletados através deste site segue as diretrizes da nossa 
              <Link href="/politica-de-privacidade" className="text-[#E07B39] hover:underline">
                Política de Privacidade
              </Link>
              , em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Ao utilizar este site, você consente com a coleta e uso de seus dados conforme descrito em nossa 
              Política de Privacidade.
            </p>
          </section>

          {/* Seção 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              9. Alterações nos Termos de Uso
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O <strong className="text-[#E07B39]">Instituto Templo da Alegria (ITA)</strong> reserva-se o direito 
              de atualizar ou modificar estes Termos de Uso a qualquer momento, sem aviso prévio.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Recomendamos que você revise periodicamente esta página para se manter informado sobre quaisquer alterações. 
              A data da última atualização está indicada no início deste documento.
            </p>
          </section>

          {/* Seção 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              10. Lei Aplicável e Foro
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Estes Termos de Uso são regidos pela legislação brasileira. Fica eleito o foro da 
              <strong className="text-[#E07B39]"> Comarca de Brasília - Distrito Federal</strong> para a resolução 
              de qualquer disputa ou controvérsia decorrente do uso deste site, com renúncia expressa a qualquer outro, 
              por mais privilegiado que seja.
            </p>
          </section>

          {/* Rodapé da página */}
          <div className="pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>
              <strong>Instituto Templo da Alegria (ITA)</strong> - Transformando vidas através da fé e da solidariedade
            </p>
            <p className="mt-1">
              Em caso de dúvidas, entre em contato através do e-mail:{' '}
              <a href="mailto:contato@ita.org.br" className="text-[#E07B39] hover:underline">
                contato@ita.org.br
              </a>
            </p>
          </div>
        </div>

        {/* Link de volta */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-[#E07B39] hover:underline">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}