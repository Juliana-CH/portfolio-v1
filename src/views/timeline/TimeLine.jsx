import * as React from 'react';
import { useTranslation } from "react-i18next";
import "./timeline.scss";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
    myCustomClass: {
        
    },
  });

export default function OppositeContentTimeline() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (

    <>
    <section id="timeline">

        <div className="title-container">
            <h2 className="titles-first-word">Time<span className="titles-second-word">line</span></h2>
        </div>

    
      <Timeline position="alternate">

        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2007
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <strong>{t("timel.ts1")}Analista de Marketing</strong>{t("timel.ts2")}no maior canal de TV do Brasil.
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">{t("timel.ts3")}Pacote Office</h2>
                <h2 className="timeline-skills-item">{t("timel.ts4")}Inglês</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2009
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            Formatura em {t("timel.ts")}<strong>{t("timel.ts6")}Administração de Empresas </strong> 
            - Universidade do Estado de Santa Catarina (UDESC/ ESAG), 
            Florianópolis, Brasil.
            <div className="timeline-skills-opposite">
                <h2 className="timeline-skills-item">{t("timel.ts7")}Orçamento BZ</h2>
                <h2 className="timeline-skills-item">{t("timel.ts8")}Microsoft CRM</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2010
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>{t("timel.ts9")}Mudança</strong>{t("timel.ts10")} para São Paulo.</p>
            <p><strong>Analista de Planejamento{t("timel.ts11")}</strong> {t("timel.ts12")}Grupo RBS, São Paulo, Brasil.</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">{t("timel.ts13")}Excel avançado</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2011
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>{t("timel.ts14")}Pós-Graduada em Inteligência de Mercado</strong> - {t("timel.ts15")}Fundação Instituto de Administração (FIA), São Paulo, Brasil.</p>
            <p><strong>{t("timel.ts16")}Promovida à Coordenadora de Negócios</strong> no Grupo RBS.</p>
            <p>{t("timel.ts17")}Retorno para Santa Catarina.</p>
            <div className="timeline-skills-opposite">
                <h2 className="timeline-skills-item">KPI's</h2>
                <h2 className="timeline-skills-item">{t("timel.ts18")}Gestão de Pessoas</h2>
                <h2 className="timeline-skills-item">{t("timel.ts19")}Avaliação de Desempenho</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2012
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>Casamento com {t("timel.ts20")}</strong> João. 
            <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
            </p>
            <p><strong>{t("timel.ts21")}Promovida à Executiva de Contas</strong> {t("timel.ts22")}no maior canal de televisão do Brasil (TV Globo), 
                filial Santa Catarina, Brasil.</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">{t("timel.ts23")}Venda B2B</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2013
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            {t("timel.ts24")}Pedi demissão e iniciei meu <strong>{t("timel.ts25")}próprio negócio</strong>{t("timel.ts26")}, Casa em Caixa, 
            um e-commerce de produtos para organização da casa.
            <div className="timeline-skills-opposite">
                <h2 className="timeline-skills-item">{t("timel.ts27")}Venda B2C</h2>
                <h2 className="timeline-skills-item">{t("timel.ts28")}Compras</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2014
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p>{t("timel.ts29")}Apoio na abertura de uma agência de publicidade, mantendo meu negócio.</p>
            <p><strong>{t("timel.ts30")}Nascimento da minha filha</strong>, Maria Antônia.
            <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
            </p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">{t("timel.ts31")}Plano de Negócios</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2015/16
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p>{t("timel.ts32")}Mergulhada na <strong>{t("timel.ts33")}maternidade</strong> {t("timel.ts34")}e compartilhando em <a href= "naosaogemeos.com.br" target='blank'>Não São Gêmeos.</a></p>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2017
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p>{t("timel.ts35")}Retomei o projeto Casa em Caixa, adicionei serviços e educação em organização.</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">{t("timel.ts36")}Gestão do tempo</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2018
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>{t("timel.ts37")}Nascimento do meu filho</strong>, Romeo.
            <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
            </p>
            <p>{t("timel.ts38")}Encerramento do Casa em Caixa.</p>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2019/ 20/ 21
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p>{t("timel.ts39")}Mergulhada na maternidade.</p>
            <p>{t("timel.ts40")}Início da pandemia. Foco no desenvolvimento dos meus filhos!</p>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2022
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>Mudança{t("timel.ts41")}</strong> {t("timel.ts42")}para Valencia, <strong>{t("timel.ts43")}Espanha</strong>
            , <strong>{t("timel.ts44")}adaptação</strong>{t("timel.ts45")} da família à nova cultura.</p>
            <p>Início {t("timel.ts46")}<strong>{t("timel.ts47")}Pós-Graduação em UX/UI e Desenvolvimento Front-End</strong> (ESAT), Espanha.{t("timel.ts48")}</p>
            <div className="timeline-skills-opposite">
                <div className="timeline-skills-item-2022">
                    <h2 className="timeline-skills-item">{t("timel.ts49")}Espanhol</h2>
                    <h2 className="timeline-skills-item">Figma</h2>
                    <h2 className="timeline-skills-item">CSS/ SASS</h2>
                    <h2 className="timeline-skills-item">HTML</h2>
                    <h2 className="timeline-skills-item">GitHub</h2>
                    <h2 className="timeline-skills-item">JavaScript</h2>
                </div>
            </div>

            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2023
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>{t("timel.ts50")}Pós-Graduada em UX/UI e Desenvolvimento Front-End</strong> (ESAT), Espanha{t("timel.ts51")}.</p>
            <p><strong>{t("timel.ts52")}Estágio em Front-End</strong> na startup AmFi.{t("timel.ts53")}</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">React</h2>
                <h2 className="timeline-skills-item">Next JS</h2>
            </div>
            </TimelineContent>
        </TimelineItem>

        
      </Timeline>

    </section>
    </>
    );
  };