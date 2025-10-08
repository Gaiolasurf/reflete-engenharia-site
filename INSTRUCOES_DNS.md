# Instruções para Configuração do DNS

Para que o domínio **www.refleteengenharia.com.br** funcione corretamente com o GitHub Pages, você precisa configurar os registros DNS no seu provedor de domínio (onde você registrou o domínio).

## Configuração Necessária

Acesse o painel de controle do seu provedor de domínio e adicione os seguintes registros DNS:

### Opção 1: Usando CNAME (Recomendado para www)

Adicione um registro **CNAME** com as seguintes informações:

- **Tipo:** CNAME
- **Nome/Host:** www
- **Valor/Destino:** gaiolasurf.github.io
- **TTL:** 3600 (ou deixe o padrão)

### Opção 2: Configuração Completa (www e domínio raiz)

Se você também quiser que **refleteengenharia.com.br** (sem www) funcione, adicione os seguintes registros:

#### Para o domínio raiz (refleteengenharia.com.br):

Adicione **quatro registros A** com os seguintes IPs do GitHub:

- **Tipo:** A
- **Nome/Host:** @ (ou deixe em branco)
- **Valor:** 185.199.108.153
- **TTL:** 3600

- **Tipo:** A
- **Nome/Host:** @ (ou deixe em branco)
- **Valor:** 185.199.109.153
- **TTL:** 3600

- **Tipo:** A
- **Nome/Host:** @ (ou deixe em branco)
- **Valor:** 185.199.110.153
- **TTL:** 3600

- **Tipo:** A
- **Nome/Host:** @ (ou deixe em branco)
- **Valor:** 185.199.111.153
- **TTL:** 3600

#### Para www (www.refleteengenharia.com.br):

- **Tipo:** CNAME
- **Nome/Host:** www
- **Valor/Destino:** gaiolasurf.github.io
- **TTL:** 3600

## Tempo de Propagação

Após configurar os registros DNS, pode levar de **15 minutos a 48 horas** para que as alterações sejam propagadas pela internet. Geralmente, leva cerca de 1-2 horas.

## Verificação

Você pode verificar se o DNS foi configurado corretamente usando ferramentas online como:

- https://dnschecker.org/
- https://www.whatsmydns.net/

Ou usando o comando no terminal:

```bash
nslookup www.refleteengenharia.com.br
```

## URLs do Site

Após a configuração do DNS, seu site estará disponível em:

- **URL Temporária (GitHub Pages):** https://gaiolasurf.github.io/reflete-engenharia-site/
- **URL Final (Domínio Personalizado):** http://www.refleteengenharia.com.br/ (depois da configuração DNS)

## HTTPS (Certificado SSL)

Após o DNS estar configurado e funcionando, o GitHub Pages irá automaticamente gerar um certificado SSL gratuito para seu domínio, permitindo o acesso via HTTPS. Isso pode levar algumas horas após a propagação do DNS.

## Suporte

Se você tiver dúvidas sobre como acessar o painel de controle do seu provedor de domínio, entre em contato com o suporte deles. Os provedores mais comuns no Brasil são:

- Registro.br
- GoDaddy
- HostGator
- Locaweb
- UOL Host

Cada um tem um painel diferente, mas todos permitem a configuração de registros DNS.

