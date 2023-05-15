# QS-ESLINT-CONFIG

## 项目描述
   基于大佬[Anthony Fu](https://github.com/antfu)的项目[eslint-config](https://github.com/antfu/eslint-config)进行自定义的扩展，适合自己书写的代码风格

## 使用说明

### 安装

```bash
pnpm add -D eslint @qs-coder/eslint-config
```

### 配置 `.eslintrc`

```json
{
  "extends": "@qs-coder"
}
```

### 你可以添加script到package.json

如:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 配置 VS Code 格式化

安装 [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 之后，创建 `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
我个人比较乐意开启formatOnSave，你可以根据你的电脑配置来决定是否开启保存自动格式化

