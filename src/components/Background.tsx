import '@/styles/Background.css';

export const Background = () => {
  return (
    <div className='encrypted-neon-pattern'>
      <span className='data-stream-overlay'></span>
      <svg className='texture-filter'>
        <filter id='neon-texture'>
          <feTurbulence
            result='noise'
            numOctaves='2'
            baseFrequency='0.6'
            type='fractalNoise'
          ></feTurbulence>
          <feSpecularLighting
            result='specular'
            lightingColor='#00f0ff'
            specularExponent='25'
            specularConstant='0.9'
            surfaceScale='2'
            in='noise'
          >
            <fePointLight z='90' y='100' x='100'></fePointLight>
          </feSpecularLighting>
          <feComposite
            result='litNoise'
            operator='over'
            in2='SourceGraphic'
            in='specular'
          ></feComposite>
          <feBlend mode='screen' in2='litNoise' in='SourceGraphic'></feBlend>
        </filter>
      </svg>
    </div>
  );
};
