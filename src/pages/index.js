import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import Sponsors from '../assets/sponsors-light.svg';

import * as S from '../components/styled.js';

const IndexPage = () => (
  <Layout>
    <SEO title="Hacktoberfest-SP 2020" />
    <S.CardBg>
      <h1>O que é o Hacktoberfest?</h1>
      <p>O Hacktoberfest - trazido à você pela DigitalOcean - é uma comemoração do software de código aberto (Open Source). Essa comemoração acontece durante o mês de Outubro inteiro. As pessoas mantenedoras são convidadas a orientar possíveis pessoas colaboradoras para questões que ajudarão a levar o projeto adiante e as pessoas colaboradoras terão a oportunidade de dar retorno aos projetos de que gostam e aos que acabaram de descobrir. Nenhuma contribuição é muito pequena - correções de bugs e atualizações de documentação são formas válidas de participação.</p>
    </S.CardBg>

    <S.Card>
      <h1>Desafio de 2020</h1>
      <p>A cada ano há um desafio para deixar as coisas um pouco mais "animadas". Esse ano o desafio será: <strong>estar registrado no <a href="https://hacktoberfest.digitalocean.com/" target="_blank">site oficial</a> e enviar 4 pull requests entre o dia 1 e 31 de Outubro</strong>. Abaixo vai alguns pontos que vale a pena lembrar:</p>

      <p>
        <ul>
          <li><strong>Todes são bem vindes!</strong> - Seja você uma pessoa experiente na área ou que está começando agora você pode participar!</li>

          <li><strong>Qualquer* contribuição para projetos no <a href="https://github.com/" target="_blank">Github</a> conta!</strong> - Contanto que o projeto seja público e que não seja um projeto seu.</li>

          <li><strong>"A quantidade é divertida mas a qualidade é a chave"!</strong> - Conseguir realizar várias contribuições é muito bom, conseguir realizar contribuições significativas é melhor ainda.</li>
        </ul>
      </p>
    </S.Card>

    <S.CardBg>
      <h1>Pequenas regras de participação</h1>
      <p>Para obter uma camiseta, você deve fazer quatro pull requests (PRs) entre 1 e 31 de outubro em qualquer fuso horário. As contribuições podem ser feitas para qualquer repositório público no GitHub, não apenas para aqueles destacados. *Se uma pessoa mantenedora relatar sua contribuição como spam, isso não será contabilizado para sua participação no Hacktoberfest. Se uma pessoa mantenedora relatar um comportamento que não esteja de acordo com o código de conduta do projeto, você não poderá participar. <strong>Este ano, os primeiros 75.000 participantes podem ganhar uma camiseta</strong>. <a href="https://hacktoberfest.digitalocean.com/details" target="_blank">Confira todos os detalhes no site oficial</a>.</p>
    </S.CardBg>

    <S.Card>
      <h1>Sobre o evento</h1>
      <p>Dessa vez o nosso encontro será online! Iremos conversar com pessoas que são referências quando o assunto é Open Source e também estaremos todes ali para fazermos nossas contribuições.</p>

      <p>Não se preocupe caso você nunca tenha feito nenhuma contribuição Open Source, esteja começando agora na área ou qualquer coisa do gênero. Teremos pessoas disponíveis durante o evento inteiro para te ajudar com o que você precisar!</p>

      <p>Para que o ambiente seja bom para todas as pessoas é muito importante que todo mundo esteja de acordo com o <a href="https://www.codamos.club/PDF-C%C3%B3digo%20de%20Conduta.pdf" target="_blank">código de conduta</a> que estamos utilizando.</p>

      <S.BtnCard href="https://www.meetup.com/pt-BR/hacktoberfest-sp/events/272260565/" target="_blank">Inscreva-se</S.BtnCard>
    </S.Card>

    <S.CardBg>
      <h1>Confira como foi a edição do ano passado:</h1>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/gggE5ownw84" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </S.CardBg>

    <S.Card>
      <h1>Como participar?</h1>
      <p>Esse ano temos que utilizar a plataforma que a equipe do Hacktoberfest disponibilizou. Iremos enviar à todas as pessoas que <a href="https://www.meetup.com/pt-BR/hacktoberfest-sp/events/272260565/" target="_blank">confirmarem presença no meetup</a> um link para poder confirmar presença nessa nova plataforma também!</p>
      <p>Ainda estamos avaliando as opções de plataformas para poder realizar nosso encontro virtualmente e assim que definirmos iremos atualizar a todes vocês!</p>
    </S.Card>

    <S.CardBg>
      <h1>Dúvidas?</h1>
      <p>Em caso de alguma dúvida entre em contato com:</p>
      <S.Profiles>
        <a href="https://twitter.com/naluhh" target="_blank">
          <S.Profile>
            <S.PictureProfile alt="" src="https://pbs.twimg.com/profile_images/1260943011384614923/j41QPT5f_400x400.jpg" />
            <S.LinkProfile>@naluhh</S.LinkProfile>
          </S.Profile>
        </a>

        <a href="https://twitter.com/TheSweet_Lari" target="_blank">
          <S.Profile>
            <S.PictureProfile alt="" src="https://pbs.twimg.com/profile_images/1285572625473863680/3EnTjr88_400x400.jpg" />
            <S.LinkProfile>@TheSweet_Lari</S.LinkProfile>
          </S.Profile>
        </a>

        <a href="https://twitter.com/ricardogouveia3" target="_blank">
          <S.Profile>
            <S.PictureProfile alt="" src="https://pbs.twimg.com/profile_images/1266672289455759360/qOhkexVM_400x400.jpg" />
            <S.LinkProfile>@ricardogouveia3</S.LinkProfile>
          </S.Profile>
        </a>
      </S.Profiles>
    </S.CardBg>

    <S.Card>
      <h1>Realização</h1>
      <p>Esse ano o Hacktoberfest está sendo realizado graças ao apoio das empresas abaixo:</p>
      <Sponsors />
    </S.Card>
  </Layout>
);

export default IndexPage;
