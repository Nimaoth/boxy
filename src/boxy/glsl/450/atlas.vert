#version 450 core

in vec2 vertexPos;
in vec2 vertexUv;
in vec4 vertexColor;
in uint vertexTextureIndex;

uniform mat4 proj;

out vec2 pos;
out vec2 uv;
out vec4 color;
flat out float textureIndex;

void main() {
  pos = vertexPos;
  uv = vertexUv;
  color = vertexColor;
  textureIndex = float(vertexTextureIndex);
  gl_Position = proj * vec4(vertexPos, 0.0, 1.0);
}
