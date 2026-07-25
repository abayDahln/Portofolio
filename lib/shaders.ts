export const vertSrc = `#version 300 es
in vec2 aPosition;
in vec2 aTexCoord;
out vec2 vTexCoord;

uniform vec2 uViewport;
uniform float uOffset;
uniform vec2 uScale;

void main() {
  vTexCoord = aTexCoord;
  vec2 pos = aPosition * uScale;
  pos.x += uOffset;
  pos.y *= uViewport.y / uViewport.x;
  gl_Position = vec4(pos, 0.0, 1.0);
}
`

export const fragSrc = `#version 300 es
precision highp float;
in vec2 vTexCoord;
out vec4 fragColor;

uniform sampler2D uTexture;
uniform float uGrainIntensity;
uniform float uDimming;

float hash21(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 19.19);
  return fract(p.x * p.y);
}

void main() {
  vec4 color = texture(uTexture, vTexCoord);

  float noise = hash21(gl_FragCoord.xy) * uGrainIntensity;
  vec3 grain = color.rgb + (noise * 2.0 - 1.0) * uGrainIntensity * 0.15;

  float dim = 1.0 - uDimming * 0.4;
  fragColor = vec4(grain * dim, color.a);
}
`
