# my-next-app

这是一个使用 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 脚手架搭建的 [React](https://react.docschina.org/) 项目。

[Next.js](https://nextjs.org/) 是一个受欢迎的生产环境 React 框架。

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js Documentation](https://nextjs.org/docs) - Next.js 特性和API
- [Learn Next.js](https://nextjs.org/learn) - 互动学习 Next.js

Next.js 的官方仓库 [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## 使用 Docker 部署

如果尚未安装 Docker ，请按照 [Get Docker](https://docs.docker.com/get-docker/) 指南安装Docker。

### 克隆仓库

使用 Git 克隆仓库到本地计算机。在 cmd 中执行以下命令：

```bash
git clone https://github.com/Yiipu/my-next-app.git
```

### 构建 Docker 镜像

进入 `YOUR-REPO` 目录并使用 Dockerfile 构建 Docker 镜像：

```bash
cd YOUR-REPO
docker build -t YOUR-IMAGE-NAME .
```

> 这将根据项目中的 Dockerfile 创建一个 Docker 镜像，并使用 `YOUR-IMAGE-NAME` 来命名镜像。命令末尾的句点（`.`）表示 Dockerfile 位于当前目录，注意不要漏掉。

### 运行 Docker 容器

镜像构建完成后，使用以下命令在 Docker 容器中运行应用程序：

```bash
docker run --rm -d -p 3030:3000/tcp YOUR-IMAGE-NAME
```

- `-d`：表示在后台运行容器。
- `-p 3030:3000`：表示将 <b>容器</b> 的端口 3000 映射到 <b>主机</b> 的端口 3030 。

可以根据应用程序的需要更改 <b>主机</b> 端口映射。

要修改 <b>容器</b> 端口映射，请修改 `Dockerfile` 对应部分：

```
EXPOSE `YOUR-CONTAINER-PORT`

ENV PORT `YOUR-CONTAINER-PORT`
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"
```

应用程序现在应该正在容器中运行。您可以在 Web 浏览器中访问 http://localhost:3000 来查看应用程序。
