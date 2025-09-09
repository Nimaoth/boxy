#version 450 core

in vec2 pos;
in vec2 uv;
in vec4 color;
flat in float textureIndex;

uniform sampler2D atlasTexs[32];

out vec4 fragColor;

void main() {
  fragColor = color;
  switch (int(textureIndex)) {
    case 0: fragColor *= texture(atlasTexs[0], uv).rgba; break;
    case 1: fragColor *= texture(atlasTexs[1], uv).rgba; break;
    case 2: fragColor *= texture(atlasTexs[2], uv).rgba; break;
    case 3: fragColor *= texture(atlasTexs[3], uv).rgba; break;
    case 4: fragColor *= texture(atlasTexs[4], uv).rgba; break;
    case 5: fragColor *= texture(atlasTexs[5], uv).rgba; break;
    case 6: fragColor *= texture(atlasTexs[6], uv).rgba; break;
    case 7: fragColor *= texture(atlasTexs[7], uv).rgba; break;
    case 8: fragColor *= texture(atlasTexs[8], uv).rgba; break;
    case 9: fragColor *= texture(atlasTexs[9], uv).rgba; break;
    case 10: fragColor *= texture(atlasTexs[10], uv).rgba; break;
    case 11: fragColor *= texture(atlasTexs[11], uv).rgba; break;
    case 12: fragColor *= texture(atlasTexs[12], uv).rgba; break;
    case 13: fragColor *= texture(atlasTexs[13], uv).rgba; break;
    case 14: fragColor *= texture(atlasTexs[14], uv).rgba; break;
    case 15: fragColor *= texture(atlasTexs[15], uv).rgba; break;
    case 16: fragColor *= texture(atlasTexs[16], uv).rgba; break;
    case 17: fragColor *= texture(atlasTexs[17], uv).rgba; break;
    case 18: fragColor *= texture(atlasTexs[18], uv).rgba; break;
    case 19: fragColor *= texture(atlasTexs[19], uv).rgba; break;
    case 20: fragColor *= texture(atlasTexs[20], uv).rgba; break;
    case 21: fragColor *= texture(atlasTexs[21], uv).rgba; break;
    case 22: fragColor *= texture(atlasTexs[22], uv).rgba; break;
    case 23: fragColor *= texture(atlasTexs[23], uv).rgba; break;
    case 24: fragColor *= texture(atlasTexs[24], uv).rgba; break;
    case 25: fragColor *= texture(atlasTexs[25], uv).rgba; break;
    case 26: fragColor *= texture(atlasTexs[26], uv).rgba; break;
    case 27: fragColor *= texture(atlasTexs[27], uv).rgba; break;
    case 28: fragColor *= texture(atlasTexs[28], uv).rgba; break;
    case 29: fragColor *= texture(atlasTexs[29], uv).rgba; break;
    case 30: fragColor *= texture(atlasTexs[30], uv).rgba; break;
    case 31: fragColor *= texture(atlasTexs[31], uv).rgba; break;
  }
}
