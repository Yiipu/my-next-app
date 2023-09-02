# my-next-app

这是一个使用 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 搭建的 [Next.js](https://nextjs.org/) 项目。

## 使用Docker部署

如果尚未安装 Docker ，请按照 [Get Docker](https://docs.docker.com/get-docker/) 指南安装Docker。

### 克隆仓库

使用 Git 克隆仓库到本地计算机。在 cmd 中执行以下命令：

```bash
git clone https://github.com/Yiipu/my-next-app.git
```

### 构建 Docker 镜像

进入`your-repo`目录：

```bash
cd your-repo
```

使用 Dockerfile 构建 Docker 镜像：

```bash
docker build -t your-image-name .
```

这将根据项目中的 Dockerfile 创建一个 Docker 镜像，并使用 `your-image-name` 来命名镜像。命令末尾的句点（`.`）表示 Dockerfile 位于当前目录，注意不要漏掉。

### 运行 Docker 容器

镜像构建完成后，使用以下命令在 Docker 容器中运行应用程序：

```bash
docker run -d -p 3000:3000 your-image-name
```

- `-d`：表示在后台运行容器。
- `-p 3000:3000`：表示将容器的端口 3000 映射到主机的端口 3000 ，您可以根据应用程序的需要更改端口映射。

### 访问应用程序

应用程序现在应该正在 Docker 容器中运行。您可以在 Web 浏览器中访问 http://localhost:3000 来查看应用程序。

## Learn More

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js Documentation](https://nextjs.org/docs) - Next.js 特性和API
- [Learn Next.js](https://nextjs.org/learn) - 互动学习 Next.js

Next.js 的官方仓库 [the Next.js GitHub repository](https://github.com/vercel/next.js/)