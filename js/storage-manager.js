/**
 * Storage Manager - Gerencia o localStorage com namespace único por projeto
 * Evita que diferentes forks/projetos compartilhem os mesmos dados
 */

// Gera um namespace único baseado na URL do projeto
function getStorageNamespace() {
    // Usa o pathname da URL para criar um identificador único
    // Remove barras iniciais e finais, substitui barras por underscores
    const path = window.location.pathname
        .replace(/^\/+|\/+$/g, '') // Remove barras do início e fim
        .replace(/\//g, '_')        // Substitui barras por underscores
        .replace(/[^a-zA-Z0-9_-]/g, '') // Remove caracteres especiais
        || 'default';

    // Adiciona o hostname para garantir unicidade entre domínios diferentes
    const host = window.location.hostname.replace(/[^a-zA-Z0-9-]/g, '_');

    return `${host}_${path}`;
}

// Namespace único para este projeto
const STORAGE_NAMESPACE = getStorageNamespace();

// Console log para debug (pode ser removido depois)
console.log(`[Storage] Namespace: ${STORAGE_NAMESPACE}`);

/**
 * Funções wrapper para localStorage com namespace automático
 */
const StorageManager = {
    /**
     * Obtém um item do localStorage com namespace
     */
    getItem(key) {
        const namespacedKey = `${STORAGE_NAMESPACE}_${key}`;
        return localStorage.getItem(namespacedKey);
    },

    /**
     * Salva um item no localStorage com namespace
     */
    setItem(key, value) {
        const namespacedKey = `${STORAGE_NAMESPACE}_${key}`;
        localStorage.setItem(namespacedKey, value);
    },

    /**
     * Remove um item do localStorage com namespace
     */
    removeItem(key) {
        const namespacedKey = `${STORAGE_NAMESPACE}_${key}`;
        localStorage.removeItem(namespacedKey);
    },

    /**
     * Limpa todos os itens deste namespace
     */
    clear() {
        const keys = Object.keys(localStorage);
        const prefix = `${STORAGE_NAMESPACE}_`;

        keys.forEach(key => {
            if (key.startsWith(prefix)) {
                localStorage.removeItem(key);
            }
        });
    },

    /**
     * Retorna o namespace atual
     */
    getNamespace() {
        return STORAGE_NAMESPACE;
    }
};

// Exporta para uso global
window.StorageManager = StorageManager;
