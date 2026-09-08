// src/app/politica-de-privacidade/page.js
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PoliticaPrivacidade() {
  return (
    <div className="bg-[#f8f7f3] min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            PAGINA Ainda Será Conferido e Atualizada!!
          </h1>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            Política de Privacidade
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
              1. Quem é o Responsável pelos seus Dados?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O <strong className="text-[#E07B39]">Instituto Templo da Alegria (ITA)</strong> é a entidade responsável (Controlador) pelas decisões sobre o tratamento de seus dados pessoais. Para questões relacionadas a esta política, você pode nos contatar através do e-mail: <a href="mailto:privacidade@ita.org.br" className="text-[#E07B39] hover:underline">privacidade@ita.org.br</a>.
            </p>
          </section>

          {/* Seção 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              2. Quais Dados Coletamos e Como os Usamos?
            </h2>
            
            <h3 className="text-lg font-bold text-gray-700 mt-4 mb-2">Dados Fornecidos Voluntariamente</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Coletamos informações que você nos fornece diretamente, como ao:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li><strong>Fazer uma doação</strong>: Nome, e-mail, CPF (para recibos) e dados bancários para processamento do pagamento.</li>
              <li><strong>Preencher um formulário de contato ou voluntariado</strong>: Nome, e-mail, telefone e sua mensagem.</li>
              <li><strong>Inscrever-se em nossa newsletter</strong>: Nome e e-mail.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              Utilizamos esses dados apenas para as finalidades específicas para as quais foram fornecidos, como processar sua doação, enviar informações sobre projetos ou responder a suas perguntas.
            </p>

            <h3 className="text-lg font-bold text-gray-700 mt-4 mb-2">Dados Coletados Automaticamente</h3>
            <p className="text-gray-700 leading-relaxed">
              Quando você navega em nosso site, podemos coletar informações técnicas, como:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Endereço de IP;</li>
              <li>Tipo e versão do seu navegador;</li>
              <li>Sistema operacional;</li>
              <li>Páginas visitadas e tempo de navegação.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              Essas informações são usadas para entender o uso do site, melhorar sua experiência e garantir sua segurança.
            </p>
          </section>

          {/* Seção 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              3. Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos cookies essenciais e analíticos para o funcionamento adequado do site e para entender como os visitantes interagem com ele. Você pode desabilitar os cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades.
            </p>
          </section>

          {/* Seção 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              4. Como e com Quem Compartilhamos seus Dados?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Seus dados pessoais são usados internamente no ITA e com parceiros essenciais para a execução de nossas atividades, sempre sob rigorosas obrigações de confidencialidade. Podemos compartilhar dados com:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
              <li><strong>Plataformas de pagamento</strong>: Para processar doações.</li>
              <li><strong>Prestadores de serviços de tecnologia</strong>: Como provedores de hospedagem, armazenamento em nuvem e envio de e-mails.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2 font-medium">
              ⚠️ Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing sem seu consentimento explícito.
            </p>
          </section>

          {/* Seção 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              5. Dados de Crianças e Adolescentes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              No ITA, tratamos os dados de crianças e adolescentes com o máximo cuidado, em estrito cumprimento ao <strong>art. 14 da LGPD</strong> e ao <strong>Estatuto da Criança e do Adolescente (ECA)</strong>.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
              <li>O tratamento desses dados sempre levará em consideração o melhor interesse da criança.</li>
              <li>A coleta de dados de crianças dependerá do consentimento específico e em destaque de um dos pais ou responsável legal.</li>
              <li>Quando utilizarmos fotos ou vídeos de menores em nossas comunicações, obteremos a autorização formal dos responsáveis e evitaremos expor crianças de forma identificável, especialmente em situações de vulnerabilidade.</li>
            </ul>
          </section>

          {/* Seção 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              6. Seus Direitos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nos termos do <strong>art. 18 da LGPD</strong>, você tem o direito de:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
              <li>Confirmar a existência de tratamento de seus dados.</li>
              <li>Acessar seus dados pessoais.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
              <li>Revogar seu consentimento a qualquer momento.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              Para exercer esses direitos, entre em contato conosco pelo e-mail <a href="mailto:privacidade@ita.org.br" className="text-[#E07B39] hover:underline">privacidade@ita.org.br</a>.
            </p>
          </section>

          {/* Seção 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              7. Segurança dos Dados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Adotamos medidas técnicas e administrativas, incluindo criptografia HTTPS, para proteger seus dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas.
            </p>
          </section>

          {/* Seção 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              8. Alterações nesta Política
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Esta política pode ser atualizada periodicamente para refletir mudanças legais ou operacionais. A data da última revisão estará sempre indicada no início do documento.
            </p>
          </section>

          {/* Seção 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              9. Contato
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se você tiver dúvidas sobre esta política ou sobre como tratamos seus dados, entre em contato conosco:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <span className="font-bold">📧 E-mail:</span>{" "}
                <a href="mailto:privacidade@ita.org.br" className="text-[#E07B39] hover:underline">
                  privacidade@ita.org.br
                </a>
              </p>
              <p className="text-gray-700 mt-1">
                <span className="font-bold">📍 Endereço:</span> ITA Estrutural - Brasília/DF
              </p>
            </div>
          </section>

          {/* Rodapé da página */}
          <div className="pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>
              O <strong>Instituto Templo da Alegria (ITA)</strong> está comprometido com a transparência e a proteção dos seus dados pessoais.
            </p>
            <p className="mt-1">
              Esta política está em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
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