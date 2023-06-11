import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import "./timeline.scss";

export default function OppositeContentTimeline() {
    return (

    <>
    <section id="time-line">

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
            Analista de Marketing no maior canal de TV do Brasil.
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">Pacote Office</h2>
                <h2 className="timeline-skills-item">Inglês</h2>
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
            Formatura em Administração de Empresas 
            - Universidade do Estado de Santa Catarina (UDESC/ ESAG), 
            Florianópolis, Brasil.
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">Orçamento BZ</h2>
                <h2 className="timeline-skills-item">Microsoft CRM</h2>
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
            <p>Mudança para São Paulo.</p>
            <p>Analista de Planejamento Grupo RBS, veículo revista, São Paulo, Brasil.</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">Excel avançado</h2>
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
            <p>Pós-Graduada em Inteligência de Mercado - Fundação Instituto de Administração (FIA), São Paulo, Brasil.</p>
            <p>Promovida à Coordenadora de Negócios no Grupo RBS. Retorno para Santa Catarina</p>
            <p>Retorno para Santa Catarina.</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">KPI's</h2><h2 className="timeline-skills">Gestão de Pessoas</h2>
                <h2 className="timeline-skills-item">Avaliação de Desempenho</h2>
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
            <p>Casamento com João.</p>
            <p>Promovida à Executiva de Contas no maior canal de televisão do Brasil (TV Globo), 
                filial Santa Catarina, Brasil.</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">Venda B2B</h2>
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
            Pedi demissão e iniciei meu próprio negócio, Casa em Caixa, 
            um e-commerce de produtos para organização da casa.
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">Venda B2C</h2>
                <h2 className="timeline-skills-item">Compras</h2>
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
            <p>Apoio na abertura de uma agência de publicidade, mantendo meu negócio.</p>
            <p>Nascimento da minha filha, Maria Antônia.</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">Plano de Negócios</h2>
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
            <p>Mergulhada na maternidade e compartilhando experiências em www.naosaogemeos.com.br</p>
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
            <p>Retomei o projeto Casa em Caixa, adicionei serviços e educação em organização.</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">Gestão do tempo</h2>
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
            <p>Nascimento do meu filho, Romeo.</p>
            <p>Encerramento do Casa em Caixa.</p>
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
            <p>Mergulhada na maternidade.</p>
            <p>Início da pandemia. Foco no desenvolvimento dos meus filhos!</p>
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
            <p>Mudança para Valencia, Espanha, adaptação da família à nova cultura.</p>
            <p>Início Pós-Graduação em UX/UI e Desenvolvimento Front-End (ESAT), Espanha.</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">Espanhol</h2><h2 className="timeline-skills-item">HTML</h2>
                <h2 className="timeline-skills-item">CSS/ SASS</h2><h2 className="timeline-skills-item">Figma</h2>
                <h2 className="timeline-skills-item">GitHub</h2><h2 className="timeline-skills-item">JavaScript</h2>
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
            <p>Pós-Graduada em UX/UI e Desenvolvimento Front-End (ESAT), Espanha.</p>
            <p>Estágio em Front-End na startup AmFi.</p>
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
  }