#version 450 core

in vec2 pos;
in vec2 uv;
in vec4 color;

uniform sampler2D atlasTexs[10];

out vec4 fragColor;

void main() {
  float a = texture(atlasTexs[0], uv).a * color.a;
  fragColor = vec4(a, a, a, a);
}
