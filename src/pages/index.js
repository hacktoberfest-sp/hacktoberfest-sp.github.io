import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import Sponsors from '../assets/sponsors-light.svg';

import * as S from '../components/styled.js';

const IndexPage = () => (
  <Layout>
    <SEO title="Hacktoberfest-SP 2020" />

    <S.CardBgWrapper>
      <S.CardBg>
        <h1>O que é o Hacktoberfest?</h1>
        <p>O Hacktoberfest - trazido à você pela DigitalOcean - é uma comemoração do software de código aberto (Open Source). Essa comemoração acontece durante o mês de Outubro inteiro. As pessoas mantenedoras são convidadas a orientar possíveis pessoas colaboradoras para questões que ajudarão a levar o projeto adiante e as pessoas colaboradoras terão a oportunidade de dar retorno aos projetos de que gostam e aos que acabaram de descobrir. Nenhuma contribuição é muito pequena - correções de bugs e atualizações de documentação são formas válidas de participação.</p>
      </S.CardBg>
    </S.CardBgWrapper>

    <S.Card>
      <h1>Desafio de 2020</h1>
      <p>A cada ano há um desafio para deixar as coisas um pouco mais "animadas". Esse ano o desafio será: <strong>estar registrado no <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noreferrer">site oficial</a> e enviar 4 pull requests entre o dia 1 e 31 de Outubro</strong>. Abaixo vai alguns pontos que vale a pena lembrar:</p>

      <p>
        <ul>
          <li><strong>Todes são bem vindes!</strong> - Seja você uma pessoa experiente na área ou que está começando agora você pode participar!</li>

          <li><strong>Qualquer* contribuição para projetos no <a href="https://github.com/" target="_blank" rel="noreferrer">Github</a> conta!</strong> - Contanto que o projeto seja público e que não seja um projeto seu.</li>

          <li><strong>"A quantidade é divertida mas a qualidade é a chave"!</strong> - Conseguir realizar várias contribuições é muito bom, conseguir realizar contribuições significativas é melhor ainda.</li>
        </ul>
      </p>
    </S.Card>

    <S.CardBgWrapper>
      <S.CardBg>
        <h1>Regras de participação</h1>
        <ul>
          <li>Para obter uma camiseta, <strong>você deve fazer quatro pull requests (PRs) entre 1 e 31 de outubro</strong> em qualquer fuso horário.</li>
          <li><strong>As contribuições podem ser feitas para qualquer repositório público no GitHub</strong>, não apenas para aqueles destacados.</li>
          <li>Se uma pessoa mantenedora relatar sua contribuição como spam, isso não será contabilizado para sua participação no Hacktoberfest.</li>
          <li>Se uma pessoa mantenedora relatar um comportamento que não esteja de acordo com o código de conduta do projeto, você não poderá participar.</li>
        </ul>
        <p style={{ margin: '0' }}><strong>Este ano, os primeiros 75.000 participantes podem ganhar uma camiseta!</strong></p>
        <p style={{ margin: '0' }}><a href="https://hacktoberfest.digitalocean.com/details" target="_blank" rel="noreferrer">Confira todos os detalhes no site oficial</a></p>
      </S.CardBg>
    </S.CardBgWrapper>

    <S.Card>
      <h1>Sobre o evento</h1>
      <p>Infelizmente, tivemos que <strong>cancelar o nosso evento de 2020</strong>, que aconteceria no sábado dia 17 de outubro, devido dificuldades para organizar o encontro no modelo remoto por conta da pandemia de COVID-19.</p>

      <p>Não se preocupe: caso você nunca tenha feito nenhuma contribuição open source, esteja começando na área ou qualquer coisa do gênero; teremos em breve uma <a href="https://github.com/hacktoberfest-sp" target="_blank" rel="noreferrer">lista de projetos simples no nosso GitHub</a>, onde você pode contribuir para fazer seus PR do evento de maneira positiva, aprender sobre desenvolvimento open source e se divertir!</p>

      <p>Para que o ambiente seja bom para todas as pessoas é muito importante que todo mundo esteja de acordo com o <a href="https://www.codamos.club/PDF-C%C3%B3digo%20de%20Conduta.pdf" target="_blank" rel="noreferrer">código de conduta</a> que estamos utilizando.</p>
    </S.Card>

    <S.CardBgWrapper>
      <S.CardBg>
        <h1>Confira como foi a edição do ano passado:</h1>
        <iframe width="100%" height="500" title="Video: Hacktoberfest SP 2019" src="https://www.youtube.com/embed/gggE5ownw84" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </S.CardBg>
    </S.CardBgWrapper>

    <S.CardBgWrapper>
      <S.CardBg>
        <h1>Dúvidas?</h1>
        <p>Em caso de alguma dúvida entre em contato com:</p>
        <S.Profiles>
          <a href="https://twitter.com/naluhh" target="_blank" rel="noreferrer">
            <S.Profile>
              <S.PictureProfile alt="" src="https://pbs.twimg.com/profile_images/1260943011384614923/j41QPT5f_400x400.jpg" />
              <S.LinkProfile>@naluhh</S.LinkProfile>
            </S.Profile>
          </a>

          <a href="https://twitter.com/TheSweet_Lari" target="_blank" rel="noreferrer">
            <S.Profile>
              <S.PictureProfile alt="" src="https://pbs.twimg.com/profile_images/1285572625473863680/3EnTjr88_400x400.jpg" />
              <S.LinkProfile>@TheSweet_Lari</S.LinkProfile>
            </S.Profile>
          </a>

          <a href="https://twitter.com/ricardogouveia3" target="_blank" rel="noreferrer">
            <S.Profile>
              <S.PictureProfile alt="" src="https://pbs.twimg.com/profile_images/1266672289455759360/qOhkexVM_400x400.jpg" />
              <S.LinkProfile>@ricardogouveia3</S.LinkProfile>
            </S.Profile>
          </a>
        </S.Profiles>
      </S.CardBg>
    </S.CardBgWrapper>

    <S.Card>
      <h1>Realização</h1>
      <p>Esse ano o Hacktoberfest está sendo realizado graças ao apoio das empresas abaixo:</p>
      <Sponsors />
    </S.Card>
  </Layout>
);

export default IndexPage;
